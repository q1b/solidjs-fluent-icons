import { splitProps } from "solid-js";
function HomeDatabaseIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11 2.39a1.5 1.5 0 00-2 0L3.5 7.33c-.32.28-.5.69-.5 1.12v7.05c0 .83.67 1.5 1.5 1.5h4.55a2.46 2.46 0 01-.05-.5v-6c0-1.22.88-2.11 1.83-2.64A7.68 7.68 0 0114.5 7c.64 0 1.27.07 1.85.2L11 2.38zm6 6.03A7.25 7.25 0 0014.5 8C12.01 8 10 9.12 10 10.5s2.02 2.5 4.5 2.5c2.49 0 4.5-1.12 4.5-2.5 0-.87-.8-1.63-2-2.08zM14.5 14c1.38 0 2.68-.3 3.67-.86.29-.16.58-.36.83-.59v3.95c0 1.38-2.01 2.5-4.5 2.5S10 17.88 10 16.5v-3.95c.25.23.54.43.83.6 1 .54 2.29.85 3.67.85z"/>
    </svg>);
}
export default HomeDatabaseIcon;
