const channels = [
    {
        id: 1,
        text: 'channelName1',
        created:'feb 5th at 1:00pm'
    },
    {
        id: 2,
        text: 'channelName2',
        created:'feb 6th at 1:00pm'
    },
    {
        id: 3,
        text: 'channelName3',
        created:'feb 7th at 1:00pm'
    },
    {
        id: 4,
        text: 'channelName4',
        created:'feb 8th at 1:00pm'
    },
    {
        id: 5,
        text: 'channelName5',
        created:'feb 8th at 1:00pm'
    }
]

const Channel = () => {
    return (
        <div className="Channel">
            {channels.map((channel)=>(<button className="chatrooms" key={channel.id}>{channel.text}</button>))}
        </div>
    )
}

export default Channel
