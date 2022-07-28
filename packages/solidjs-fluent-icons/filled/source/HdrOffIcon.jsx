import { splitProps } from "solid-js";
function HdrOffIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.85 2.15a.5.5 0 10-.7.7l1.41 1.42A2.75 2.75 0 002 6.75v6.5A2.75 2.75 0 004.75 16h10.54l1.86 1.85a.5.5 0 00.7-.7l-15-15zm8.38 9.8c-.4.34-.91.55-1.48.55H9.5A.5.5 0 019 12V9.7l1 1v.78c.2-.04.37-.13.52-.25l.71.71zM8 8.7V12a.5.5 0 01-1 0v-1.5H5V12a.5.5 0 01-1 0V8a.5.5 0 011 0v1.5h2V8a.5.5 0 01.06-.23L8 8.7zm4 1.04v.13l1 1V8c0-.28.22-.5.5-.5h1a1.5 1.5 0 01.87 2.72l.6 1.6a.5.5 0 01-.94.36l-.63-1.68H14v1.38l3.25 3.25c.47-.49.75-1.15.75-1.88v-6.5A2.75 2.75 0 0015.25 4H6.12l3.5 3.5h.13c1.24 0 2.25 1 2.25 2.25zm2-.25h.5a.5.5 0 000-1H14v1z"/>
    </svg>);
}
export default HdrOffIcon;
