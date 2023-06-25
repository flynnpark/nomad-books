import ProfileItem, {
  Props as ProfileItemProps,
} from '~/components/ProfileItem';
import { PageTitle } from '~/styles/layout';

const items: ProfileItemProps[] = [
  {
    name: 'Github',
    value: 'https://github.com/flynnpark',
  },
  {
    name: 'Linkedin',
    value: 'https://www.linkedin.com/in/flynnpark',
  },
  {
    name: 'Nomadcoders',
    value: 'https://nomadcoders.co/users/flynnpark',
  },
];

function About() {
  return (
    <>
      <PageTitle>Flynn Park</PageTitle>
      {items.map((item) => (
        <ProfileItem key={item.name} name={item.name} value={item.value} />
      ))}
    </>
  );
}

export default About;
