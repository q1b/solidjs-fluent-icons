import { splitProps } from "solid-js";
function LightbulbCircleIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.5 8.5a3.5 3.5 0 115.59 2.81c-.19.14-.29.29-.31.43l-.05.26H8.27l-.05-.26c-.02-.14-.12-.3-.3-.43A3.5 3.5 0 016.5 8.5zm2.18 5.68L8.46 13h3.08l-.22 1.18a1 1 0 01-.98.82h-.68a1 1 0 01-.98-.82z"/>
    </svg>);
}
export default LightbulbCircleIcon;
