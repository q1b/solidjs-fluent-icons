import { splitProps } from "solid-js";
function MoleculeIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17 6a4 4 0 01-7.33 2.22l-1.66.84a3.49 3.49 0 01.82 3.5l2.7 1.4a2.5 2.5 0 11-.44.89l-2.7-1.38A3.5 3.5 0 117.1 8.39l2.13-1.06A4 4 0 1117 6z"/>
    </svg>);
}
export default MoleculeIcon;
