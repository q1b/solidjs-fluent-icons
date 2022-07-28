import { splitProps } from "solid-js";
function NetworkCheckIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.51 10.18a8 8 0 0110.37-4.65l.57-.72.08-.1a9 9 0 00-11.95 5.1.5.5 0 10.93.37zm13.5-3.87a9.02 9.02 0 012.41 3.51.5.5 0 01-.93.36 8 8 0 00-1.87-2.88l.26-.66.14-.33zM10 6.5c.66 0 1.3.1 1.9.28l-.67.86a5.52 5.52 0 00-6.56 3.98.5.5 0 11-.96-.24A6.5 6.5 0 0110 6.5zm5 2.35l-.44 1.08c.35.51.6 1.08.77 1.7a.5.5 0 10.97-.25c-.25-.95-.7-1.8-1.3-2.53zM10 9h.16l-.83 1.08A3 3 0 007 13a.5.5 0 01-1 0 4 4 0 014-4zm3.17 4.35v.02c.08.08.2.13.33.13a.5.5 0 00.5-.5 4 4 0 00-.19-1.21l-.64 1.56zm.22-6.85l.61-.78.23-.29.04-.04a.5.5 0 01.86.37l-.04.16-.14.35a1207.08 1207.08 0 01-2.7 6.7 77.26 77.26 0 01-.73 1.66 1.75 1.75 0 01-3.04-1.75l.38-.54.7-.92a341.32 341.32 0 013.83-4.92zm-1.1 3.02a338.93 338.93 0 00-2.94 3.86.75.75 0 101.3.75l.23-.5.44-1.05a342.47 342.47 0 001.55-3.8l-.57.74zm2.84-3.76a.5.5 0 01-.04.16z"/>
    </svg>);
}
export default NetworkCheckIcon;
