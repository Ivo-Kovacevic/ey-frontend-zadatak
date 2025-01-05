import { SubmitHandler, useForm } from "react-hook-form";
import H1 from "../H1";
import { useRef, useState } from "react";

type FormFields = {
  name: string;
  email: string;
  animal: string;
};

export default function Form() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const animals = ["mačka", "pas", "hrčak"];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    modalRef.current?.showModal();
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
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]/,
              message: "Please enter a valid email address",
            },
          })}
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

        <button className="mt-4 rounded-xl border-2 border-neutral-900 p-2 hover:bg-neutral-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-900">
          Submit
        </button>
      </form>

      <dialog ref={modalRef} className="rounded-xl p-4 text-center">
        <p className="m-4">Uspješna prijava</p>
        <button
          onClick={() => modalRef.current?.close()}
          className="rounded-xl border-2 border-neutral-900 p-2 hover:bg-neutral-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-900"
        >
          Zatvori modal
        </button>
      </dialog>
    </section>
  );
}
