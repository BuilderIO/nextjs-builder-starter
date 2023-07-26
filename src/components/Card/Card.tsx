export interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
  buttonText: string;
}

export const Card = ({ imgSrc, buttonText, description, title }: CardProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={imgSrc} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{buttonText}</button>
        </div>
      </div>
    </div>)
}