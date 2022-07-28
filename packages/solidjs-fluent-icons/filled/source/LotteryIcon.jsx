import { splitProps } from "solid-js";
function LotteryIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12.44 3.25c-.98.32-1.83.94-2.44 1.75a5.01 5.01 0 00-2.44-1.75 3 3 0 014.88 0zm-8.81 7.97a6.5 6.5 0 015.85-5.2 4 4 0 10-5.85 5.2zm12.74 0a4 4 0 10-5.85-5.2 6.5 6.5 0 015.85 5.2zm-.87 1.28a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-7.5-2c0 .28.22.5.5.5h2.24l-.32.48a7.65 7.65 0 00-1.17 2.96.5.5 0 101 .12c.1-.9.56-1.82 1.02-2.54a11.1 11.1 0 01.84-1.17l.01-.02a.5.5 0 00-.37-.83H8.5a.5.5 0 00-.5.5z"/>
    </svg>);
}
export default LotteryIcon;
