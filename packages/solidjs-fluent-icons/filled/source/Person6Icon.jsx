import { splitProps } from "solid-js";
function Person6Icon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 6a4 4 0 118 0 4 4 0 01-8 0zm-3 7a2 2 0 012-2h9.05A3.49 3.49 0 0013 13.5v3c0 .37.06.73.16 1.06-.96.3-2.03.44-3.16.44a9.14 9.14 0 01-4.87-1.2A4.35 4.35 0 013 13zm12 .5a1.5 1.5 0 012.63-1 .5.5 0 00.74-.65A2.5 2.5 0 0014 13.5v3a2.5 2.5 0 101-2v-1zm1.5 4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
    </svg>);
}
export default Person6Icon;
