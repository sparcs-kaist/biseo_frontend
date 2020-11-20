import React from 'react';
import BiseoButton from '@/components/BiseoButton';
import { VoteItemContainer, VoteItemContent } from './styled';

interface AdminVoteItemProps {
  active: boolean;
  title: string;
}

const AdminVoteItem: React.FC<AdminVoteItemProps> = ({
  active,
  title
}: AdminVoteItemProps) => {
  const buttonProps = active
    ? { background: '#f2a024', foreground: '#ffffff' }
    : {};
  const buttonText = active ? '진행 중' : '시작하기';

  return (
    <VoteItemContainer>
      <VoteItemContent>
        {title}
        <BiseoButton {...buttonProps}>{buttonText}</BiseoButton>
      </VoteItemContent>
    </VoteItemContainer>
  );
};

export default AdminVoteItem;
