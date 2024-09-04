import './filterButtons.css';

const FilterButtons = ({ setStatus, status }) => {
  const buttons = [
    { label: 'all', key: 'all' },
    { label: 'active', key: 'active' },
    { label: 'completed', key: 'completed' },
    { label: 'important', key: 'important' },
    { label: 'trash', key: 'trash' },
  ];

  return (
    <div className="filterButtons">
      {buttons.map(({ label, key }) => (
        <button
          key={key}
          className={status === key ? 'filterButtons-btn-active' : ''}
          onClick={() => setStatus(key)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
