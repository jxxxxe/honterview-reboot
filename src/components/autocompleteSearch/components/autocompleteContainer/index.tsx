import { useAutocomplete } from '../../contexts';

const AutocompleteContainer = ({ children }: React.PropsWithChildren) => {
  const { autocompleteRef } = useAutocomplete();

  return (
    <div
      ref={autocompleteRef}
      className="flex h-full w-full flex-col"
    >
      {children}
    </div>
  );
};

export default AutocompleteContainer;
