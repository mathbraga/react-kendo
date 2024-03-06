export const TrackUrlCell = (props) => {
  const lastFMUrl = props.dataItem.url;

  return (
    <td>
      <a href={lastFMUrl} target='_blank'>
        <span className='hover:text-[#56aad4] hover:underline'>Link</span>
      </a>
    </td>
  );
};
