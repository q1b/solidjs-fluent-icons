import { splitProps } from "solid-js";
function Checkbox2Icon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h7.05c.06-.3.18-.63.4-1 .23-.4.57-.8 1.04-1.23a1.5 1.5 0 01-1.12-2.48A3.51 3.51 0 0115.82 11c.42-.02.82.05 1.18.17V6a3 3 0 00-3-3H6zm7.85 4.85l-5 5a.5.5 0 01-.7 0l-2-2a.5.5 0 01.7-.7l1.65 1.64 4.65-4.64a.5.5 0 01.7.7zM15.93 13c-.3.02-.67.16-1.05.6a.5.5 0 11-.76-.65c.54-.61 1.15-.91 1.76-.95.6-.03 1.14.2 1.52.57.38.36.63.88.59 1.43-.04.57-.38 1.1-.99 1.45-1.1.64-1.6 1.2-1.82 1.55h2.32a.5.5 0 110 1h-3a.5.5 0 01-.5-.45 1.43 1.43 0 01.03-.34c.04-.19.12-.42.28-.7a5.8 5.8 0 012.2-1.93c.36-.21.47-.46.48-.65a.84.84 0 00-.28-.64c-.2-.19-.48-.3-.78-.29z"/>
    </svg>);
}
export default Checkbox2Icon;
