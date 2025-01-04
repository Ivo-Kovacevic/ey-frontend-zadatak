import { SubmitHandler, useForm } from "react-hook-form";
import H1 from "../H1";

type FormFields = {
  name: string;
  email: string;
  animal: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();
  const animals = ["mačka", "pas", "hrčak"];

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <section className="mx-auto max-w-screen-sm p-4" onSubmit={handleSubmit(onSubmit)}>
      <H1>Contact</H1>
      <form className="flex flex-col">
        <label htmlFor="name">Name:</label>
        <input
          {...register("name", { required: "Name is required" })}
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          className="rounded-xl border-2 p-2"
        />
        {errors.name && <div className="text-red-600">{errors.name.message}</div>}

        <label htmlFor="email" className="mt-4">
          Email:
        </label>
        <input
          {...register("email", { required: "Email is required" })}
          type="email"
          id="email"
          name="email"
          placeholder="example@mail.com"
          className="rounded-xl border-2 p-2"
        />
        {errors.email && <div className="text-red-600">{errors.email.message}</div>}

        <p className="mt-4">Pick an animal:</p>
        {animals.map((animal) => (
          <div key={animal}>
            <input
              {...register("animal", { required: "Please pick an animal" })}
              type="radio"
              name="animal"
              id={animal}
              value={animal}
            />
            <label htmlFor={animal}>{animal}</label>
          </div>
        ))}
        {errors.animal && <div className="text-red-600">{errors.animal.message}</div>}

        <button className="mt-4 rounded-xl border-2 border-neutral-900 p-2 hover:bg-neutral-900 hover:text-white">
          Submit
        </button>
      </form>
    </section>
  );
}
