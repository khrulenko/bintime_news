import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  createNameStyles,
  createLabelStyles,
  createSelectWrapperStyles,
  createItemStyles,
} from './styles';

interface Props<T> {
  name: string;
  data: [key: string, value: string][];
  value: T;
  onChange: (value: T) => void;
}

const Name = styled(Typography)(createNameStyles);
const Label = styled(InputLabel)(createLabelStyles);
const SelectWrapper = styled(Select)(createSelectWrapperStyles);
const Item = styled(MenuItem)(createItemStyles);

const Dropdown = <T extends string>({
  name,
  data,
  value,
  onChange,
}: Props<T>) => {
  const handleChange = ({ target: { value } }: SelectChangeEvent<unknown>) => {
    onChange(value as T);
  };

  return (
    <Stack gap="4px">
      <Name>{name}</Name>

      <FormControl size="small">
        {!value && <Label shrink={false}>Select</Label>}

        <SelectWrapper
          value={value}
          onChange={handleChange}
          IconComponent={ExpandMoreIcon}
          MenuProps={{
            sx: {
              marginTop: '6px',
              maxHeight: '248px',
            },
          }}
        >
          <Item value="">All</Item>

          {data.map(([key, value]) => (
            <Item key={key} value={value}>
              {key}
            </Item>
          ))}
        </SelectWrapper>
      </FormControl>
    </Stack>
  );
};

export default Dropdown;
