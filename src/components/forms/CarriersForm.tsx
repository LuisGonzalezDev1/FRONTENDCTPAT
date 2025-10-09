export default function CarriersForm() {
  return (
    <>
      <div>
        <label htmlFor="container">Nombre del transportista</label>
        <input
          id="name"
          type="text"
          placeholder="CMCU-009"
          // {...register("name")}
        />
        {/* {errors.container && (
          <ErrorMessage>{errors.name.message}</ErrorMessage>
        )} */}
      </div>

    </>
  );
}
