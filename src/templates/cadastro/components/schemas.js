import * as yup from 'yup';
import isMobilePhone from 'validator/lib/isMobilePhone';
import {
  AT_LEAST_ONE,
  INVALID_PHONE,
  MANDATORY_FIELD,
  MIN_CHARS_INPUTS,
  minCharsMessage,
} from './constants';

export const cadastroTela2Schema = yup.object().shape({
  country: yup.string().required(MANDATORY_FIELD),
  state: yup.string().required(MANDATORY_FIELD),
  city: yup
    .string()
    .required(MANDATORY_FIELD)
    .min(MIN_CHARS_INPUTS, minCharsMessage(MIN_CHARS_INPUTS)),
  phoneNumber: yup
    .string()
    .required(MANDATORY_FIELD)
    .test(
      'is-valid',
      INVALID_PHONE,
      (value) => (value
        ? isMobilePhone(value)
        : new yup.ValidationError(INVALID_PHONE)),
    ),
  birthDate: yup.date().required(MANDATORY_FIELD),
  schooling: yup.string().required(MANDATORY_FIELD),
  bachelor: yup.string().when('schooling', {
    is: (value) => value.includes('superior'),
    then: () => yup
      .string()
      .required(MANDATORY_FIELD)
      .min(MIN_CHARS_INPUTS, minCharsMessage(MIN_CHARS_INPUTS)),
  }),
  deficiencia: yup.string().required(MANDATORY_FIELD),
  disability: yup.string().when('deficiencia', {
    is: (value) => value === 'sim',
    then: () => yup
      .string()
      .required(MANDATORY_FIELD)
      .min(MIN_CHARS_INPUTS, minCharsMessage(MIN_CHARS_INPUTS)),
  }),
});

export const cadastroTela3Schema = yup.object().shape({
  howFoundPep: yup.string().required(MANDATORY_FIELD),
  knowledgePep: yup.string().required(MANDATORY_FIELD),
  studiesKnowledge: yup
    .string()
    .required(MANDATORY_FIELD)
    .min(MIN_CHARS_INPUTS, minCharsMessage(MIN_CHARS_INPUTS)),
  lifeExperience: yup
    .string()
    .required(MANDATORY_FIELD)
    .min(MIN_CHARS_INPUTS, minCharsMessage(MIN_CHARS_INPUTS)),
  desires: yup
    .string()
    .required(MANDATORY_FIELD)
    .min(MIN_CHARS_INPUTS, minCharsMessage(MIN_CHARS_INPUTS)),
});

export const cadastroTela4Schema = yup.object().shape({
  interestFutureRoles: yup
    .object()
    .shape({
      facilitadorPresencial: yup.boolean(),
      facilitadorVirtual: yup.boolean(),
      avaliadorRemoto: yup.boolean(),
      captaçãoDeVoluntario: yup.boolean(),
      leituraDeCaderno: yup.boolean(),
      tradutorRemoto: yup.boolean(),
      divulgacao: yup.boolean(),
      captacaoDeGrupos: yup.boolean(),
      leituraDeRedacao: yup.boolean(),
    })
    .test('teste', null, (obj) => {
      if (
        obj.facilitadorPresencial
        || obj.facilitadorVirtual
        || obj.avaliadorRemoto
        || obj.captaçãoDeVoluntario
        || obj.leituraDeCaderno
        || obj.tradutorRemoto
        || obj.divulgacao
        || obj.captacaoDeGrupos
        || obj.leituraDeRedacao
      ) {
        return true;
      }

      return new yup.ValidationError(AT_LEAST_ONE, null, 'interestFutureRoles');
    }),
  rolesPep: yup
    .object()
    .shape({
      administracao: yup.boolean(),
      comunicacao: yup.boolean(),
      jornalismo: yup.boolean(),
      midiasSociais: yup.boolean(),
      radioTV: yup.boolean(),
      RH: yup.boolean(),
      TI: yup.boolean(),
      psicologia: yup.boolean(),
      assistenciaSocial: yup.boolean(),
      outros: yup.boolean(),
    })
    .test('test', null, (obj) => {
      if (
        obj.administracao
        || obj.comunicacao
        || obj.jornalismo
        || obj.midiasSociais
        || obj.radioTV
        || obj.RH
        || obj.TI
        || obj.psicologia
        || obj.assistenciaSocial
        || obj.outros
      ) {
        return true;
      }

      return new yup.ValidationError(AT_LEAST_ONE, null, 'rolesPep');
    }),
  needDeclaration: yup.string().required(MANDATORY_FIELD),
});
