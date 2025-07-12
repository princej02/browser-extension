import { useState } from "react";

interface CardProps {
  name: string;
  logo: string;
  description: string;
  isActive: boolean;
}

type ToggleButtonProps = {
  isActive: boolean;
  onToggle?: () => void;
};

const ToggleButton = ({ isActive, onToggle }: ToggleButtonProps) => {
  return (
    <label className="toggle-button-outer">
      <input type="checkbox" checked={isActive} onChange={onToggle}/>
      <span className="slider"></span>
    </label>
  );
}

const Card = ({ name, logo, description, isActive: active }: CardProps) => {
  const [isActive, setIsActive] = useState(active);
  return (
    <div className="card">
      <div className="card-body">
        <div>
          <img src={logo} alt={`${name} logo`} className="card-logo" />
        </div>
        <div className="card-content">
          <h3 className="card-title">{name}</h3>
          <p className="card-description">{description}</p>
        </div>
      </div>
      <div className="card-footer">
        <button className="pill">Remove</button>
        <ToggleButton isActive={isActive} onToggle={() => setIsActive(!isActive)}/>
      </div>
    </div>
  )
}

export default Card