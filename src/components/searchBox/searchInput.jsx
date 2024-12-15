import { Input, Button } from "@material-tailwind/react";

export function InputWithButton() {
  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
        variant="outlined"
        label="Search"
        type="search"
        className="pr-20 p-0 bg-white/80 outline-blue-600"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        color="blue"
        size="sm"
        className="!absolute right-1 top-1 rounded "
      >
        search
      </Button>
    </div>
  );
}
