import React from 'react';
import { useForm } from 'react-hook-form';
import BiseoButton from '@/components/BiseoButton';
import {
  AdminContentContainer,
  ButtonGroup,
  ContentTextArea,
  SubtitleInput,
  TitleInput,
} from './styled';

interface Props {
  choices: string[];
  extendable: boolean;
  onVoteCreate: (
    title: string,
    content: string,
    subtitle: string,
    choices: string[]
  ) => void;
}

interface FormInputs {
  title: string;
  content: string;
  subtitle: string;
}

const AdminContent: React.FC<Props> = ({
  choices,
  extendable,
  onVoteCreate,
}) => {
  const { register, handleSubmit, errors, reset } = useForm<FormInputs>();
  const onSubmit = ({ title, content, subtitle }: FormInputs) => {
    if (choices.length < 1) return;
    onVoteCreate(title, content, subtitle, choices);
    reset();
  };

  return (
    <AdminContentContainer onSubmit={handleSubmit(onSubmit)}>
      <TitleInput
        name="title"
        placeholder="투표 제목을 입력하세요"
        className={errors.title && 'error'}
        ref={register({ required: true })}
      />
      <ContentTextArea
        name="content"
        placeholder="투표 내용을 입력하세요"
        className={errors.content && 'error'}
        ref={register({ required: true })}
      />
      <SubtitleInput
        name="subtitle"
        placeholder="의결문안을 입력하세요"
        className={errors.subtitle && 'error'}
        ref={register({ required: true })}
      />
      <ButtonGroup>
        {choices.map(choice => (
          // a button's default type is 'submit', but we don't want this button to submit
          <BiseoButton type="button" nocursor key={choice}>
            {choice}
          </BiseoButton>
        ))}
        {extendable && <BiseoButton>+</BiseoButton>}
      </ButtonGroup>
      <ButtonGroup alignRight={true}>
        <BiseoButton type="submit" background="#f2a024" foreground="#ffffff">
          만들기
        </BiseoButton>
      </ButtonGroup>
    </AdminContentContainer>
  );
};

export default AdminContent;
