import { ItemContainer, ItemName } from './styled';

export interface Props {
  name: string;
  value: string;
}

function ProfileItem({ name, value }: Props) {
  return (
    <ItemContainer>
      <ItemName>{name}:</ItemName>{' '}
      {value.startsWith('https://') ? (
        <a href={value} target="_blank">
          {value}
        </a>
      ) : (
        value
      )}
    </ItemContainer>
  );
}

export default ProfileItem;
