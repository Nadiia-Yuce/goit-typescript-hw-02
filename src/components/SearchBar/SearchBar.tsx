import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { Submit } from "../../types";

export default function SearchBar({ onSubmit }: Submit) {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const input = form.elements.namedItem("search") as HTMLInputElement;
    const query = input.value.trim();

    if (!query) {
      toast("❗️The field can not be empty!", {
        duration: 4000,
      });
      return;
    }

    onSubmit(query);
    // evt.target.reset();
  };

  return (
    <header className={css.header}>
      <Toaster />
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
