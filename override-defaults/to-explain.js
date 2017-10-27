type Init = $Supertype<Media> & {
  index?: number,
  feed?: Feed,
};

export const createMedia = (options: ?Init): Media => {
  const { index = 0, feed, ...properties } = options || {};
  const feedName = feed ? feed.name : 'Marketing';

  const defaults: Media = {
    id: 'UUID',
    title: `${index} Intro to ${feedName}`,
    description: 'Descriotion will be here.',
    type: ['asset', 'source', 'session'][index % 3],
    thumbnail: emptyImage,
    ctime: moment('2017-01-01').subtract(index, 'months').unix(),
    duration: 90 + (index * 60),
  };

  // Allow to overwrite any default.
  return { ...defaults, ...properties };
};
