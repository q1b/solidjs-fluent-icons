import { splitProps } from "solid-js";
function BluetoothDisabledIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9 9.7L2.15 2.86a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7L13.29 14l-3.42 3.84A.5.5 0 019 17.5v-6.33L6.8 12.9a.5.5 0 01-.6-.78L9 9.9v-.2zm3.58 3.58L10 10.71v5.47l2.58-2.9zM13.8 7.4l-2.4 1.9-.72-.72 2.08-1.63L10 3.82v4.06l-1-1V2.5a.5.5 0 01.87-.33l4 4.5a.5.5 0 01-.06.72z"/>
    </svg>);
}
export default BluetoothDisabledIcon;
