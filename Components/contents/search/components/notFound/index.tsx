import { StyledNotFound } from "./styles";
import SadIcon from "./SadIcon";

const NotFound = () => {
  return (
    <StyledNotFound>
      <h3>
        <SadIcon />
        Sorry, We found nothing!
      </h3>
      <p>
        Try other synonyms or remove filters, maybe you could help us to improve
        our icon packs with
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
