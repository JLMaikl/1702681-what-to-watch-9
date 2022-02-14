import MainPage from '../main-page/main-page';

type MainPageProps = {
  filmCardTitle: string;
  filmCardGenre: string;
  filmCardYear: number;
}


function App({filmCardTitle, filmCardGenre, filmCardYear}: MainPageProps): JSX.Element {

  return (

    <MainPage
      filmCardTitle={filmCardTitle}
      filmCardGenre={filmCardGenre}
      filmCardYear={filmCardYear}
    />
  );
}

export default App;
