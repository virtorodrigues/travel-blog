/**
 * @typedef {import("@prismicio/client").Content.TesteSlice} TesteSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TesteSlice>} TesteProps
 * @param {TesteProps}
 */
const Teste = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for teste (variation: {slice.variation}) Slices
    </section>
  );
};

export default Teste;
