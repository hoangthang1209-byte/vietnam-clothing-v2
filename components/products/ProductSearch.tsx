type Props = {

    value: string;
  
    onChange: (
      value: string
    ) => void;
  };
  
  export default function ProductSearch({
  
    value,
  
    onChange,
  
  }: Props) {
  
    return (
  
      <div
        className="
          mt-10
        "
      >
  
        <input
          type="text"
  
          value={
            value
          }
  
          onChange={(e) =>
            onChange(
              e.target.value
            )
          }
  
          placeholder="
            Search products...
          "
  
          className="
            w-full
            rounded-full
            border
            border-black/10
            bg-white
            px-6
            py-4
            outline-none
            transition
            focus:border-black
          "
        />
  
      </div>
    );
  }