const ColorCircles: React.FC<{ color: string; selected?: boolean }> = ({ color, selected }) => (
    <div style={{ display: 'flex', gap: '4px' }}>
        <div
            key={color}
            style={{
                width: selected ? 14 : 10,
                height: selected ? 14 : 10,
                borderRadius: '50%',
                backgroundColor: color,
                border: selected ? '2px solid violet' : '1px solid #fff',
                boxShadow: selected
                    ? '0 0 4px 1px violet'
                    : '0 0 1px rgba(0,0,0,0.2)',
                cursor: 'pointer',
                outline: selected ? '1px solid violet' : undefined,
            }}
            title={color}
        />
    </div>
);

export default ColorCircles;
