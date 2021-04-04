import { StyledNotFound } from "./styles";

const NotFound = () => {
  return (
    <StyledNotFound>
      <h3>
        <svg width="3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
          <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm8-152c-13.2 0-24 10.8-24 24s10.8 24 24 24c23.8 0 46.3 10.5 61.6 28.8 8.1 9.8 23.2 11.9 33.8 3.1 10.2-8.5 11.6-23.6 3.1-33.8C330 320.8 294.1 304 256 304zm-88-64c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-165.6 98.8C151 290.1 126 325.4 126 342.9c0 22.7 18.8 41.1 42 41.1s42-18.4 42-41.1c0-17.5-25-52.8-36.4-68.1-2.8-3.7-8.4-3.7-11.2 0z" />
        </svg>
        Sorry, We found nothing!
      </h3>
      <p>
        Try other synonyms or maybe you could help us to improve icons directory
        with
        <a
          href="https://github.com/snappmarket/IconBox/issues/new"
          target="_blank"
          rel="noreferrer"
        >
          adding new packs
        </a>
        ?
      </p>
    </StyledNotFound>
  );
};

export default NotFound;
