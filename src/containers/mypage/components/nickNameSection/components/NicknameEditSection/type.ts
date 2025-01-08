export interface NicknameEditSectionProps {
  currentNickname: string;
  closeModal: () => void;
  onChangeNickname: (nickname: string) => void;
}
