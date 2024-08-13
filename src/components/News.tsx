import CardLine from './CardLine';
/**
 * Список новостей
 */
const props = [
  { 
    emoji: "📰",
    text: "Mash: при обыске у генерала Булгакова нашли картины с ним, Шойгу и Ивановым"
  },
  {
    emoji: "🗞️",
    text: "ФПК: после ДТП в Волгоградской области 12 пассажирских поездов идут с задержками"
  },
  {
    emoji: "📻",
    text: "Госдума приняла закон о штрафах до миллиона рублей за треш-стримы"
  }
]

export const News: React.FC = () => {
  return (
    <>
      <div className='container'>
        <h1 className='title-second'>Сейчас в СМИ</h1>
        <div className='items'>
          {props.map((news, index) => (
            <CardLine key={index} {...news} />
          ))}
        </div>
      </div>
    </>
  );
};
