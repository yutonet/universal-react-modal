openModal(
    // modal name
    'text',
    // modal props
    {
        layer: 1,
        title: 'Text Modal',
        content: 'This is a simple text modal.',
        onClose: () => { console.log('modal closed.'); }
    }
)