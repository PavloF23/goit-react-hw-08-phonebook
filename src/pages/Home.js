import { PageBox, PageTitle } from "components/App.styled";
  
  export default function Home() {
    return (
      <PageBox >
        <PageTitle>
          Task manager welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </PageTitle>
      </PageBox>
    );
  }