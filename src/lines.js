const lines = [
    ['55.792089,37.588415', '55.772763,37.604433'],
    ['55.772763,37.604433', '55.770155,37.595936'],
    ['55.770155,37.595936', '55.777034,37.584077'],
    ['55.777034,37.584077', '55.785561,37.565764'],
    ['55.792089,37.588415', '55.777034,37.584077'],
    ['55.785561,37.565764', '55.774483,37.553786'],
    ['55.774483,37.553786', '55.765505,37.541021'],
    ['55.765505,37.541021', '55.763461,37.560634'],
    ['55.774483,37.553786', '55.763461,37.560634'],
    ['55.792089,37.588415', '55.810078,37.579709'],
    ['55.810078,37.579709', '55.846258,37.568079'],
    ['55.846258,37.568079', '55.836570,37.538768'],
    ['55.836570,37.538768', '55.816007,37.520143'],
    ['55.816007,37.520143', '55.815066,37.501432'],
    ['55.815066,37.501432', '55.806315,37.510745'],
    ['55.806315,37.510745', '55.797908,37.500617'],
    ['55.797908,37.500617', '55.793564,37.493450'],
    ['55.793564,37.493450', '55.788230,37.484740'],
    ['55.788230,37.484740', '55.775511,37.477573'],
    ['55.775511,37.477573', '55.778074,37.522785'],
    ['55.778074,37.522785', '55.773421,37.545723'],
    ['55.785561,37.565764', '55.791933,37.551117'],
    ['55.791933,37.551117', '55.806315,37.510745'],
    ['55.791933,37.551117', '55.792099,37.510004'],
    ['55.770155,37.595936', '55.752751,37.583346'],
    ['55.763461,37.560634', '55.760574,37.578539'],
    ['55.760574,37.578539', '55.752846,37.574419'],
    ['55.752846,37.574419', '55.752751,37.583346'],
    ['55.752751,37.583346', '55.759075,37.584461'],
    ['55.759075,37.584461', '55.760574,37.578539'],
    ['55.752846,37.574419', '55.746255,37.551309'],
    ['55.746255,37.551309', '55.740354,37.535430'],
    ['55.740354,37.535430', '55.731643,37.490455'],
    ['55.765505,37.541021', '55.768777,37.515604'],
    ['55.768777,37.515604', '55.756209,37.527534'],
    ['55.768777,37.515604', '55.778074,37.522785'],
    ['55.756209,37.527534', '55.743129,37.480113'],
    ['55.743129,37.480113', '55.731643,37.490455'],
    ['55.775511,37.477573', '55.745078,37.422318'],
    ['55.745078,37.422318', '55.769446,37.428305'],
    ['55.769075,37.474595', '55.770423,37.504478'],
    ['55.792089,37.588415', '55.793168,37.617052'],
    ['55.793168,37.617052', '55.807994,37.616365'],
    ['55.807994,37.616365', '55.821496,37.616708'],
    ['55.807994,37.616365', '55.813804,37.601731'],
    ['55.813804,37.601731', '55.848270,37.584951'],
    ['55.848270,37.584951', '55.846258,37.568079'],
    ['55.821496,37.616708', '55.818546,37.638595'],
    ['55.818546,37.638595', '55.792160,37.634518'],
    ['55.792160,37.634518', '55.793168,37.617052'],
    ['55.770155,37.595936', '55.764811,37.605292'],
    ['55.764811,37.605292', '55.766710,37.631391'],
    ['55.764811,37.605292', '55.752945,37.600621'],
    ['55.752945,37.600621', '55.729585,37.611972'],
    ['55.729585,37.611972', '55.735363,37.594720'],
    ['55.735363,37.594720', '55.746717,37.582532'],
    ['55.746717,37.582532', '55.752751,37.583346'],
    ['55.772763,37.604433', '55.772838,37.632628'],
    ['55.772838,37.632628', '55.766710,37.631391'],
    ['55.772838,37.632628', '55.792160,37.634518'],
    ['55.729585,37.611972', '55.709451,37.584060'],
    ['55.709451,37.584060', '55.717653,37.569148'],
    ['55.717653,37.569148', '55.735363,37.594720'],
    ['55.729585,37.611972', '55.729914,37.623860'],
    ['55.729914,37.623860', '55.740641,37.652613'],
    ['55.741223,37.653596', '55.770379,37.643815'],
    ['55.770379,37.643815', '55.753517,37.633319'],
    ['55.753517,37.633319', '55.729914,37.623860'],
    ['55.753517,37.633319', '55.747027,37.640508'],
    ['55.747027,37.640508', '55.741223,37.653596'],
    ['55.729914,37.623860', '55.711415,37.622067'],
    ['55.711415,37.622067', '55.706119,37.621166'],
    ['55.711415,37.622067', '55.701738,37.579007'],
    ['55.706119,37.621166', '55.709451,37.584060'],
    ['55.709451,37.584060', '55.701738,37.579007'],
    ['55.741223,37.653596', '55.708814,37.666541'],
    ['55.741223,37.653596', '55.727906,37.680288'],
    ['55.727906,37.680288', '55.720449,37.700565'],
    ['55.741223,37.653596', '55.737738,37.684135'],
    ['55.737738,37.684135', '55.736498,37.698286'],
    ['55.736498,37.698286', '55.727906,37.680288'],
    ['55.770379,37.643815', '55.774636,37.651804'],
    ['55.774636,37.651804', '55.787817,37.679217'],
    ['55.774636,37.651804', '55.792160,37.634518'],
    ['55.787817,37.679217', '55.782749,37.696726'],
    ['55.782749,37.696726', '55.768546,37.667588'],
    ['55.759378,37.646222', '55.768546,37.667588'],
    ['55.747027,37.640508', '55.759378,37.646222'],
    ['55.787817,37.679217', '55.796574,37.698509'],
    ['55.796574,37.698509', '55.818546,37.638595'],
    ];

module.exports = lines;
