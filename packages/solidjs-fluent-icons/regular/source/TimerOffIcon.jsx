import { splitProps } from "solid-js";
function TimerOffIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.96 5.67L2.15 2.85a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7l-2.32-2.31A6.98 6.98 0 012.5 11c0-2.13.96-4.05 2.46-5.33zm9.16 9.16L10 10.7v.79a.5.5 0 01-1 0V9.7L5.67 6.39A5.99 5.99 0 009.5 17c1.86 0 3.52-.85 4.62-2.17zM9 6.5v.38l1 1V6.5a.5.5 0 00-1 0zm6.5 4.5a6 6 0 01-.35 2.03l.77.77A7 7 0 006.7 4.58l.77.77A5.99 5.99 0 0115.5 11zm-8-9a.5.5 0 000 1h4a.5.5 0 000-1h-4zm7.66 1.93a.5.5 0 10-.71.7l1.41 1.42a.5.5 0 10.71-.7l-1.41-1.42z"/>
    </svg>);
}
export default TimerOffIcon;
