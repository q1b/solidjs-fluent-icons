import { splitProps } from "solid-js";
function CallConnectingIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.54 2.12a4.1 4.1 0 00-2.99.32 2.87 2.87 0 00-1.5 2.5c-.06 1.8.36 4.22 2.02 7.06A16.28 16.28 0 009 17.48c.94.63 1.99.65 2.88.24a3.9 3.9 0 001.96-2.22c.2-.5.15-1.06-.12-1.53l-.95-1.7a2.5 2.5 0 00-3.07-1.12l-.67.25c-.32.13-.62.07-.79-.1A4.32 4.32 0 017.1 9.19c-.06-.25.06-.55.34-.77l.6-.45a2.5 2.5 0 00.67-3.24l-.97-1.7c-.26-.45-.7-.78-1.2-.9zm-3.5 2.85c.02-.77.41-1.33 1-1.66a3.1 3.1 0 012.25-.22c.24.06.45.22.58.43l.97 1.7c.38.65.2 1.49-.4 1.94l-.6.46c-.52.39-.88 1.06-.71 1.78.22.99.7 1.92 1.42 2.62.52.51 1.27.54 1.85.32l.66-.26a1.5 1.5 0 011.85.67l.95 1.7c.12.22.14.47.06.7a2.91 2.91 0 01-1.45 1.66 1.9 1.9 0 01-1.9-.16 15.3 15.3 0 01-4.64-5.15 12.28 12.28 0 01-1.89-6.53zm9.7-2.9a.5.5 0 10-.48.87l.38.21a8.5 8.5 0 014.33 6.58l.03.32a.5.5 0 101-.1l-.03-.32a9.5 9.5 0 00-4.84-7.35l-.39-.22zm-1.17 2.67a.5.5 0 01.69-.17l.12.08a6.5 6.5 0 013.07 4.5l.04.27a.5.5 0 11-.98.16l-.05-.27a5.5 5.5 0 00-2.6-3.8l-.12-.08a.5.5 0 01-.17-.69z"/>
    </svg>);
}
export default CallConnectingIcon;
