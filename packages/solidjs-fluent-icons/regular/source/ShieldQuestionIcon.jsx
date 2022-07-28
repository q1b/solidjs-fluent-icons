import { splitProps } from "solid-js";
function ShieldQuestionIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.72 2.08a.5.5 0 01.56 0c1.94 1.3 4.03 2.1 6.3 2.43A.5.5 0 0117 5v4.5c0 3.9-2.3 6.73-6.82 8.47a.5.5 0 01-.36 0C5.31 16.23 3 13.39 3 9.5V5a.5.5 0 01.43-.5 15.05 15.05 0 006.3-2.42zM9.6 3.35A15.97 15.97 0 014 5.43V9.5c0 3.4 1.97 5.86 6 7.46 4.03-1.6 6-4.07 6-7.46V5.43a15.97 15.97 0 01-5.6-2.08L10 3.1l-.4.25zm1.15 10.4a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-2-5.5a1.25 1.25 0 112.5 0c0 .46-.27.76-.73 1.22l-.03.03c-.42.42-.99.99-.99 1.9v.1a.5.5 0 001 0v-.1c0-.47.27-.77.73-1.22l.03-.04c.42-.41.99-.98.99-1.89a2.25 2.25 0 00-4.5 0 .5.5 0 001 0z"/>
    </svg>);
}
export default ShieldQuestionIcon;
