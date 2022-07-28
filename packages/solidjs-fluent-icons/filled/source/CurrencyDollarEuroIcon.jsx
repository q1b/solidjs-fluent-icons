import { splitProps } from "solid-js";
function CurrencyDollarEuroIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.5 2a.75.75 0 00-.75.75v.33A3.5 3.5 0 002 6.5v.28c0 1.47.85 2.8 2.17 3.42l.58.27v4.87a2 2 0 01-1.25-1.86V12.4a.75.75 0 00-1.5 0v1.08a3.5 3.5 0 002.75 3.42v.35a.75.75 0 001.5 0v-.35A3.5 3.5 0 009 13.48v-.27c0-1.46-.84-2.8-2.17-3.42l-.58-.27V4.64A2 2 0 017.5 6.5v1.1a.75.75 0 001.5 0V6.5a3.5 3.5 0 00-2.75-3.42v-.33A.75.75 0 005.5 2zm-2 4.5a2 2 0 011.25-1.86v4.18A2.28 2.28 0 013.5 6.78V6.5zm2.75 8.84v-4.16a2.27 2.27 0 011.25 2.03v.27a2 2 0 01-1.25 1.86zM12.5 10c0-.34.02-.66.06-.98h1.7a.75.75 0 000-1.5h-1.38A6.1 6.1 0 0113.61 6c.67-1 1.52-1.5 2.36-1.5.3 0 .63.1.86.25a.75.75 0 00.84-1.24 3.1 3.1 0 00-1.7-.51c-1.49 0-2.75.9-3.6 2.16a7.8 7.8 0 00-1.05 2.36h-.57a.75.75 0 000 1.5h.3a10.02 10.02 0 00-.05 1h-.25a.75.75 0 100 1.5h.37a8.2 8.2 0 001.25 3.32c.85 1.26 2.11 2.16 3.6 2.16.54 0 1.2-.14 1.72-.52a.75.75 0 10-.87-1.22c-.21.15-.53.24-.85.24-.84 0-1.69-.5-2.36-1.5a6.6 6.6 0 01-.97-2.48h1.61a.75.75 0 100-1.5H12.5V10z"/>
    </svg>);
}
export default CurrencyDollarEuroIcon;
