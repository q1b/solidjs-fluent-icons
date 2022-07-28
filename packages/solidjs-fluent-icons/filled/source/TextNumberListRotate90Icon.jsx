import { splitProps } from "solid-js";
function TextNumberListRotate90Icon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M18.99 4.61a.5.5 0 01-.49.39h-4a.5.5 0 010-1h2.58c-.2-.22-.38-.48-.53-.78a.5.5 0 11.9-.44 2.96 2.96 0 001.15 1.2l.12.07c.2.1.32.34.27.56zm-7.34-1.96c.2-.2.5-.2.7 0h.01v.01a1.3 1.3 0 01.11.12A2.44 2.44 0 0113 4.32c0 .38-.1.79-.35 1.11A1.4 1.4 0 0111.5 6a1.5 1.5 0 01-1.2-.57 4.2 4.2 0 01-.56-.96c-.16-.3-.3-.54-.47-.7A.93.93 0 009 3.58V5.5a.5.5 0 11-1 0V3c0-.28.22-.5.5-.5.62 0 1.08.2 1.44.52a3.32 3.32 0 01.77 1.15c.13.27.23.47.35.62a.5.5 0 00.44.21c.18 0 .28-.07.35-.16.09-.12.15-.3.15-.53a1.5 1.5 0 00-.35-.95v-.01a.5.5 0 010-.7zM5 4.25a.5.5 0 00-1 0c0 .34-.1.53-.18.63-.09.1-.2.13-.3.13C3.32 5 3 4.82 3 4.25c0-.41.1-.63.17-.72a.41.41 0 01.07-.1.5.5 0 00-.46-.88h-.01l-.02.02a.83.83 0 00-.15.1 1.4 1.4 0 00-.27.3c-.18.28-.33.7-.33 1.28 0 1.03.67 1.73 1.48 1.76.37.01.74-.12 1.02-.4.28.28.65.41 1.02.4C6.32 5.98 7 5.28 7 4.25c0-.59-.15-1-.33-1.28a1.4 1.4 0 00-.42-.4l-.01-.01h-.01a.5.5 0 00-.48.87l.08.1c.07.1.17.3.17.72 0 .57-.33.75-.52.76a.37.37 0 01-.3-.13C5.1 4.78 5 4.59 5 4.25zm.75-.82l.02.01h-.02zM5.25 8c.41 0 .75.34.75.75v7.5a.75.75 0 01-1.5 0v-7.5c0-.41.34-.75.75-.75zm5 0c.41 0 .75.34.75.75v7.5a.75.75 0 01-1.5 0v-7.5c0-.41.34-.75.75-.75zm5 0c.41 0 .75.34.75.75v7.5a.75.75 0 01-1.5 0v-7.5c0-.41.34-.75.75-.75z"/>
    </svg>);
}
export default TextNumberListRotate90Icon;