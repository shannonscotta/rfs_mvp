const CodeIcon = ({ handleView }) => {
  return (
    <svg
      width="37"
      height="24"
      viewBox="0 0 37 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => handleView("skills")}
    >
      <mask id="codeiconid1">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.4841 6.56461C11.2109 5.88938 11.2109 4.79563 10.4841 4.12041L10.4597 4.09741C9.73283 3.42218 8.55526 3.42218 7.82844 4.09741L1.16304 10.288C0.436213 10.9632 0.436213 12.0591 1.16304 12.7343L7.82844 18.9245C8.55526 19.5997 9.73283 19.5997 10.4597 18.9245L10.4841 18.9019C11.2109 18.2267 11.2109 17.1329 10.4841 16.4577L6.47619 12.7343C5.74937 12.0591 5.74937 10.9632 6.47619 10.288L10.4841 6.56461ZM36.0939 10.288L29.4285 4.09741C28.7036 3.42218 27.5241 3.42218 26.7973 4.09741L26.7729 4.12041C26.046 4.79563 26.046 5.88938 26.7729 6.56461L30.7826 10.288C31.5095 10.9632 31.5095 12.0591 30.7826 12.7343L26.7729 16.4577C26.046 17.1329 26.046 18.2267 26.7729 18.9019L26.7973 18.9245C27.5241 19.5997 28.7036 19.5997 29.4285 18.9245L36.0939 12.7343C36.8207 12.0591 36.8207 10.9632 36.0939 10.288ZM24.9025 3.05634L15.305 21.9531C14.9941 22.5472 14.4486 23.2813 13.7448 23.2813H13.7076C12.3392 23.2813 11.4474 21.571 12.0525 20.4179L21.5941 1.70006C21.905 1.10773 23.0575 0.64324 23.0575 0.64324V0.599365C24.9193 0.599365 25.5057 1.90325 24.9025 3.05634Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4841 6.56461C11.2109 5.88938 11.2109 4.79563 10.4841 4.12041L10.4597 4.09741C9.73283 3.42218 8.55526 3.42218 7.82844 4.09741L1.16304 10.288C0.436213 10.9632 0.436213 12.0591 1.16304 12.7343L7.82844 18.9245C8.55526 19.5997 9.73283 19.5997 10.4597 18.9245L10.4841 18.9019C11.2109 18.2267 11.2109 17.1329 10.4841 16.4577L6.47619 12.7343C5.74937 12.0591 5.74937 10.9632 6.47619 10.288L10.4841 6.56461ZM36.0939 10.288L29.4285 4.09741C28.7036 3.42218 27.5241 3.42218 26.7973 4.09741L26.7729 4.12041C26.046 4.79563 26.046 5.88938 26.7729 6.56461L30.7826 10.288C31.5095 10.9632 31.5095 12.0591 30.7826 12.7343L26.7729 16.4577C26.046 17.1329 26.046 18.2267 26.7729 18.9019L26.7973 18.9245C27.5241 19.5997 28.7036 19.5997 29.4285 18.9245L36.0939 12.7343C36.8207 12.0591 36.8207 10.9632 36.0939 10.288ZM24.9025 3.05634L15.305 21.9531C14.9941 22.5472 14.4486 23.2813 13.7448 23.2813H13.7076C12.3392 23.2813 11.4474 21.571 12.0525 20.4179L21.5941 1.70006C21.905 1.10773 23.0575 0.64324 23.0575 0.64324V0.599365C24.9193 0.599365 25.5057 1.90325 24.9025 3.05634Z"
      />
    </svg>
  );
};

export default CodeIcon;
