import { splitProps } from "solid-js";
function ChevronUpDownIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14.91 7.22a.5.5 0 01-.76.63L10 3.71 5.85 7.85l-.07.06a.5.5 0 01-.63-.76l4.5-4.5.07-.06a.5.5 0 01.63.06l4.5 4.5.06.07zM5.1 12.78a.5.5 0 01.76-.63L10 16.29l4.15-4.14.07-.06a.5.5 0 01.63.76l-4.5 4.5-.07.06a.5.5 0 01-.63-.06l-4.5-4.5-.06-.07z"/>
    </svg>);
}
export default ChevronUpDownIcon;
