import clothes from "@/app/data/clothes.json";

// deconstruction clothes.json
const jacka = clothes["clothes"].jacka;
const byxor = clothes["clothes"].byxor;

// kläderna har poängsystem som går från 0-3. noll är inget alls och 3 är max

export default function Clothes() {
  return (
    <>
      <ul>
        {jacka.map((jacka,index) => (
          <li key={index}>{jacka.name}</li>
        ))}
      </ul>
    </>
  );
}
