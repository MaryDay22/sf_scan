import { useForm } from "../../../api/hooks/useForm";
import Button from "../../../ui/Button/Button"; // Подставьте путь к вашему компоненту кнопки

const SearchButton = () => {
  const { handleSubmit, formData, encodedId } = useForm();

  const handleSearch = () => {
    handleSubmit();
    // Дополнительные действия после выполнения поиска, если необходимо
  };

  return (
    <Button
      isDisabled={!encodedId || !encodedId.data || encodedId.data.length === 0}
      text="Поиск"
      onClick={handleSearch}
    />
  );
};

export default SearchButton;