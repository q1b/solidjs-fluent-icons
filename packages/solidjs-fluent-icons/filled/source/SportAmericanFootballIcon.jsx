import { splitProps } from "solid-js";
function SportAmericanFootballIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.94 2.64A11.63 11.63 0 002.6 10.9l6.6 6.6a10.9 10.9 0 006.08-4.08 13.32 13.32 0 002.07-4.35l-6.42-6.43zm.91 5.5c.2.2.2.52 0 .71l-3 3a.5.5 0 01-.7-.7l3-3c.2-.2.5-.2.7 0zm5.8-.2c.26-1.3.36-2.56.35-3.71A2.25 2.25 0 0015.7 2c-1.32.02-2.53.15-3.62.37l5.56 5.56zm-9.6 9.81l-5.72-5.72A16.1 16.1 0 002 15.84c.04 1.18 1 2.09 2.15 2.14 1.43.07 2.72-.02 3.89-.23z"/>
    </svg>);
}
export default SportAmericanFootballIcon;
