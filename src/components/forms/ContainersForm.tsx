export default function ContainersForm() {
  return (
    <>
      <div>
        <label htmlFor="container">Codigo de contenedor</label>
        <input
          id="container"
          type="text"
          placeholder="CMCU-009"
          // {...register("container")}
        />
        {/* {errors.container && (
          <ErrorMessage>{errors.container.message}</ErrorMessage>
        )} */}
      </div>

      <div>
        <label htmlFor="seal">Sello</label>
        <input
          id="seal"
          type="number"
          placeholder="295621"
          // {...register("seal")}
        />
        {/* {errors.seal && (
          <ErrorMessage>{errors.seal.message}</ErrorMessage>
        )} */}
      </div>

      <div>
        <label htmlFor="sensor">Sensor</label>
        <input
          id="sensor"
          type="number"
          placeholder="295645"
          // {...register("sensor")}
        />
        {/* {errors.sensor && (
          <ErrorMessage>{errors.sensor.message}</ErrorMessage>
        )} */}
      </div>

      <div>
        <label htmlFor="type">Tipo</label>
        <input
          id="type"
          type="text"
          placeholder="HC 48"
          // {...register("type")}
        />
        {/* {errors.type && (
          <ErrorMessage>{errors.type.message}</ErrorMessage>
        )} */}
      </div>
    </>
  );
}
