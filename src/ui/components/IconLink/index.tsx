import { Link } from '@mui/material';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

interface Props {
  href: string;
}

const IconLink = ({ href }: Props) => {
  return (
    <Link href={href}>
      <InsertLinkIcon />
    </Link>
  );
};

export default IconLink;
