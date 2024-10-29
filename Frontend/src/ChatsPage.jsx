import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'f9e3e16e-2a3b-4511-b4ed-468fa00018cb',
        props.user.username,
        props.user.secret
    );
    return (
        <div style={{ height: '100vh', width: '213vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%', width: '100%' }} />
        </div>
    )
}

export default ChatsPage
