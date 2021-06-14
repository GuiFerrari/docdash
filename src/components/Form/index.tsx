import { useCallback, useState } from 'react';
import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';
import axios from 'axios';
import * as Yup from 'yup';

import styles from './form.module.scss';

import Input from './Input';
import InputMask from './InputMask';
import Select from './Select';

import { DocumentInterface } from '@/interfaces'

type DocDashFormProps = {
  title: string;
  handleAddData?(data: DocumentInterface): void;
};

type FormProps = {
  documentName: string;
  personType: string,
  document: string;
  name: string;
  cep: string;
  street: string;
  number: string;
  city: string;
  uf: string;
}

export default function DocDashForm({
  title = 'Formulário',
  handleAddData
}: DocDashFormProps) {
  const [personType, setPersonType] = useState('fisical');
  const [isLoading, setIsLoading] = useState(false);

  const [cepComplete, setCepComplete] = useState(false);
  const [loadingCep, setLoadingCep] = useState(false);

  const handleSubmit = useCallback(async (values: FormProps, actions) => {
    setIsLoading(true);

    if (values.document.slice(-1) === `_`) {
      actions.setErrors({
        document: `Digite um documento válido`,
      });
      setIsLoading(false);
      return;
    }

    if (values.cep.slice(-1) === `_`) {
      actions.setErrors({
        cep: `Digite um CEP válido`,
      });
      setIsLoading(false);
      return;
    }

    Object.assign(values, {
      created: new Date()
    })

    try {
      const response = await axios.post('http://localhost:3333/documents', values);
      toast.success(`Documento salvo com sucesso!`);
      handleAddData(response.data);
      actions.resetForm();
    } catch {
      toast.error(`Houve um problema ao salvar o documento!`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleChangePersonType = useCallback((event) => {
    setPersonType(event.target.value)
  }, []);

  const searchCep = useCallback((cep, setFieldValue) => {
    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => {
        if (res.data.erro) {
          toast.error(`Erro ao buscar o CEP`);
          setFieldValue(`city`, ``);
          setFieldValue(`uf`, ``);
        } else {
          setFieldValue(`city`, res.data.localidade);
          setFieldValue(`uf`, res.data.uf);
        }
      })
      .finally(() => {
        setCepComplete(true);
        setLoadingCep(false);
      });
  }, []);

  const handleChangeCep = useCallback((e, setFieldValue) => {
    const { value } = e.target;
    const lastCharacter = value.slice(-1);

    setFieldValue('cep', value);

    if (value) {
      if (lastCharacter !== `_` && !loadingCep) {
        if (!cepComplete) {
          searchCep(value.replace(`-`, ``), setFieldValue);
        }
      } else {
        setCepComplete(false);
      }
    } else {
      setFieldValue(`city`, ``);
      setFieldValue(`uf`, ``);
    }
  }, [loadingCep, searchCep, cepComplete]);
  
  const FormSchema = Yup.object().shape({
    documentName: Yup.string().required(`Nome do documento obrigatório`),
    personType: Yup.string().required(`Tipo de pessoa obrigatório`),
    document: Yup.string().required(`CPF obrigatório`),
    name: Yup.string().required(`Nome completo obrigatório`),
    cep: Yup.string().required(`CEP obrigatório`),
    street: Yup.string().required(`Rua obrigatório`),
    number: Yup.string().required(`Número obrigatório`),
    city: Yup.string().required(`Cidade obrigatório`),
    uf: Yup.string().required(`UF obrigatório`),
  });

  return (
    <div className={styles.container}>
      <div className={styles.formHeader}>
        <h2>{title}</h2>
      </div>

      <div className={styles.formBody}>
      <Formik
        initialValues={{
          documentName: '',
          personType: 'fisical',
          document: '',
          name: '',
          cep: '',
          street: '',
          number: '',
          city: '',
          uf: '',
        }}
        validationSchema={FormSchema}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        {({ errors, setFieldValue }) => (
          <Form className={styles.form}>
            <Input
              title="Nome do documento"
              name="documentName"
              required
              error={errors.documentName}
            />
            <Select
              title="Tipo de pessoa"
              name="personType"
              onChange={handleChangePersonType}
              required
              error={errors.personType}
            />
            <InputMask
              title={personType === "fisical" ? "CPF" : "CNPJ"}
              name="document"
              mask={personType === "fisical" ? "999.999.999-99" : "99.999.999/9999-99"}
              required
              error={errors.document}
            />
            <Input
              title="Nome completo"
              name="name"
              required
              error={errors.name}
            />
            
            <h3>Dados do cartório</h3>
  
            <div className="w-40">
              <InputMask
                title="CEP"
                name="cep"
                mask="99999-999"
                required
                onChange={(e) => handleChangeCep(e, setFieldValue)}
                error={errors.cep}
              />
            </div>
  
            <div className="grid grid-template-columns-2-inverted gap-20">
              <Input
                title="Rua"
                name="street"
                required
                error={errors.street}
              />
              <Input
                title="Número"
                name="number"
                required
                error={errors.number}
              />
            </div>
  
            <div className="grid grid-template-columns-2-inverted gap-20">
              <Input
                title="Cidade"
                name="city"
                placeholder=""
                required
                error={errors.city}
                disabled
              />
              <Input
                title="UF"
                name="uf"
                placeholder=""
                required
                error={errors.uf}
                disabled
              />
            </div>
  
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Enviando documento...' : 'Criar documento'}
            </button>
          </Form>  
        )}
      </Formik>
      </div>
    </div>
  )
}